import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivd")
export default class IvdController {
  @operation({
    summary: "Get Ivd",
  })
  @get()
  static getIvd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ivd",
  })
  @post("{id}")
  static createIvd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
