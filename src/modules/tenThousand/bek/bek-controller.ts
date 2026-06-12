import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bek")
export default class BekController {
  @operation({
    summary: "Get Bek",
  })
  @get()
  static getBek = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bek",
  })
  @post("{id}")
  static createBek = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
