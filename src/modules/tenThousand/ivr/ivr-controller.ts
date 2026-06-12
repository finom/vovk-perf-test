import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivr")
export default class IvrController {
  @operation({
    summary: "Get Ivr",
  })
  @get()
  static getIvr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ivr",
  })
  @post("{id}")
  static createIvr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
