import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kba")
export default class KbaController {
  @operation({
    summary: "Get Kba",
  })
  @get()
  static getKba = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kba",
  })
  @post("{id}")
  static createKba = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
