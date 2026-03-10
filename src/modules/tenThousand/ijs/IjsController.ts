import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijs")
export default class IjsController {
  @operation({
    summary: "Get Ijs",
  })
  @get()
  static getIjs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ijs",
  })
  @post("{id}")
  static createIjs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
