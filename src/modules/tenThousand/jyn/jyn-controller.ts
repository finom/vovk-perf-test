import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyn")
export default class JynController {
  @operation({
    summary: "Get Jyn",
  })
  @get()
  static getJyn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jyn",
  })
  @post("{id}")
  static createJyn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
