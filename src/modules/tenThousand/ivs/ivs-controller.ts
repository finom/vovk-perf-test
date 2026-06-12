import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivs")
export default class IvsController {
  @operation({
    summary: "Get Ivs",
  })
  @get()
  static getIvs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ivs",
  })
  @post("{id}")
  static createIvs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
