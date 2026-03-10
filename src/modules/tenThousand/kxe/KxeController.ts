import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxe")
export default class KxeController {
  @operation({
    summary: "Get Kxe",
  })
  @get()
  static getKxe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kxe",
  })
  @post("{id}")
  static createKxe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
