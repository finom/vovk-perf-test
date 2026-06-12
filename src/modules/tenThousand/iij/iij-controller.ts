import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iij")
export default class IijController {
  @operation({
    summary: "Get Iij",
  })
  @get()
  static getIij = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iij",
  })
  @post("{id}")
  static createIij = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
