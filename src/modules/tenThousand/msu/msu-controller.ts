import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msu")
export default class MsuController {
  @operation({
    summary: "Get Msu",
  })
  @get()
  static getMsu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Msu",
  })
  @post("{id}")
  static createMsu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
