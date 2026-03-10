import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbf")
export default class LbfController {
  @operation({
    summary: "Get Lbf",
  })
  @get()
  static getLbf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lbf",
  })
  @post("{id}")
  static createLbf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
