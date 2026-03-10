import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ikr")
export default class IkrController {
  @operation({
    summary: "Get Ikr",
  })
  @get()
  static getIkr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ikr",
  })
  @post("{id}")
  static createIkr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
