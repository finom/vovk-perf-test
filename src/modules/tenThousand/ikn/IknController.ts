import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ikn")
export default class IknController {
  @operation({
    summary: "Get Ikn",
  })
  @get()
  static getIkn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ikn",
  })
  @post("{id}")
  static createIkn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
