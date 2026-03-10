import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwy")
export default class IwyController {
  @operation({
    summary: "Get Iwy",
  })
  @get()
  static getIwy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iwy",
  })
  @post("{id}")
  static createIwy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
