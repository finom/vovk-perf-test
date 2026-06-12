import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dek")
export default class DekController {
  @operation({
    summary: "Get Dek",
  })
  @get()
  static getDek = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dek",
  })
  @post("{id}")
  static createDek = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
