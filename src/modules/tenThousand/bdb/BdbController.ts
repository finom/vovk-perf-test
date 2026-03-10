import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bdb")
export default class BdbController {
  @operation({
    summary: "Get Bdb",
  })
  @get()
  static getBdb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bdb",
  })
  @post("{id}")
  static createBdb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
