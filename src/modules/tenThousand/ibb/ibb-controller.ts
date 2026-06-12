import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibb")
export default class IbbController {
  @operation({
    summary: "Get Ibb",
  })
  @get()
  static getIbb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ibb",
  })
  @post("{id}")
  static createIbb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
