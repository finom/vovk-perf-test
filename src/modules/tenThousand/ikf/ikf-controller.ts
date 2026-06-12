import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ikf")
export default class IkfController {
  @operation({
    summary: "Get Ikf",
  })
  @get()
  static getIkf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ikf",
  })
  @post("{id}")
  static createIkf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
