import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cx")
export default class CxController {
  @operation({
    summary: "Get Cx",
  })
  @get()
  static getCx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cx",
  })
  @post("{id}")
  static createCx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
