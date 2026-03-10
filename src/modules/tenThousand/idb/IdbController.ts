import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idb")
export default class IdbController {
  @operation({
    summary: "Get Idb",
  })
  @get()
  static getIdb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Idb",
  })
  @post("{id}")
  static createIdb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
