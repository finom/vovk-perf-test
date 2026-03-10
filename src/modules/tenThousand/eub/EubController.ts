import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eub")
export default class EubController {
  @operation({
    summary: "Get Eub",
  })
  @get()
  static getEub = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eub",
  })
  @post("{id}")
  static createEub = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
