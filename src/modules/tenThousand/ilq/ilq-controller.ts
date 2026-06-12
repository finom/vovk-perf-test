import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ilq")
export default class IlqController {
  @operation({
    summary: "Get Ilq",
  })
  @get()
  static getIlq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ilq",
  })
  @post("{id}")
  static createIlq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
