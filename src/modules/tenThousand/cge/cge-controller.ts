import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cge")
export default class CgeController {
  @operation({
    summary: "Get Cge",
  })
  @get()
  static getCge = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cge",
  })
  @post("{id}")
  static createCge = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
