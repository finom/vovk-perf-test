import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("igh")
export default class IghController {
  @operation({
    summary: "Get Igh",
  })
  @get()
  static getIgh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Igh",
  })
  @post("{id}")
  static createIgh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
