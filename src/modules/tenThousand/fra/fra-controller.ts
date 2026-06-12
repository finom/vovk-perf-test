import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fra")
export default class FraController {
  @operation({
    summary: "Get Fra",
  })
  @get()
  static getFra = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fra",
  })
  @post("{id}")
  static createFra = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
