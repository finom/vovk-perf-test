import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("as")
export default class AsController {
  @operation({
    summary: "Get As",
  })
  @get()
  static getAs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create As",
  })
  @post("{id}")
  static createAs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
