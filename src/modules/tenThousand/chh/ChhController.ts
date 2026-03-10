import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chh")
export default class ChhController {
  @operation({
    summary: "Get Chh",
  })
  @get()
  static getChh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Chh",
  })
  @post("{id}")
  static createChh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
