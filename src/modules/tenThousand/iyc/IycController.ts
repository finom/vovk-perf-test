import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iyc")
export default class IycController {
  @operation({
    summary: "Get Iyc",
  })
  @get()
  static getIyc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iyc",
  })
  @post("{id}")
  static createIyc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
