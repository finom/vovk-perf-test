import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ic")
export default class IcController {
  @operation({
    summary: "Get Ic",
  })
  @get()
  static getIc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ic",
  })
  @post("{id}")
  static createIc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
