import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("duk")
export default class DukController {
  @operation({
    summary: "Get Duk",
  })
  @get()
  static getDuk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Duk",
  })
  @post("{id}")
  static createDuk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
