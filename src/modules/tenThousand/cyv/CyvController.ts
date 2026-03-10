import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyv")
export default class CyvController {
  @operation({
    summary: "Get Cyv",
  })
  @get()
  static getCyv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cyv",
  })
  @post("{id}")
  static createCyv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
