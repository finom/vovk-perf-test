import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iyt")
export default class IytController {
  @operation({
    summary: "Get Iyt",
  })
  @get()
  static getIyt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iyt",
  })
  @post("{id}")
  static createIyt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
