import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cah")
export default class CahController {
  @operation({
    summary: "Get Cah",
  })
  @get()
  static getCah = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cah",
  })
  @post("{id}")
  static createCah = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
