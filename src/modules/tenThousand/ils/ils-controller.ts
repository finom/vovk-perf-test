import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ils")
export default class IlsController {
  @operation({
    summary: "Get Ils",
  })
  @get()
  static getIls = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ils",
  })
  @post("{id}")
  static createIls = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
