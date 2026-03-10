import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwc")
export default class IwcController {
  @operation({
    summary: "Get Iwc",
  })
  @get()
  static getIwc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iwc",
  })
  @post("{id}")
  static createIwc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
