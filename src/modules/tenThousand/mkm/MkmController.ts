import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mkm")
export default class MkmController {
  @operation({
    summary: "Get Mkm",
  })
  @get()
  static getMkm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mkm",
  })
  @post("{id}")
  static createMkm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
