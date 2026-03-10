import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iom")
export default class IomController {
  @operation({
    summary: "Get Iom",
  })
  @get()
  static getIom = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iom",
  })
  @post("{id}")
  static createIom = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
