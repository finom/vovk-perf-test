import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbr")
export default class LbrController {
  @operation({
    summary: "Get Lbr",
  })
  @get()
  static getLbr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lbr",
  })
  @post("{id}")
  static createLbr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
