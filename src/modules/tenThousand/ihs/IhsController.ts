import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihs")
export default class IhsController {
  @operation({
    summary: "Get Ihs",
  })
  @get()
  static getIhs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ihs",
  })
  @post("{id}")
  static createIhs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
