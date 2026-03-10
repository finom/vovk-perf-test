import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bah")
export default class BahController {
  @operation({
    summary: "Get Bah",
  })
  @get()
  static getBah = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bah",
  })
  @post("{id}")
  static createBah = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
