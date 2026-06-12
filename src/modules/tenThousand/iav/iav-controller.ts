import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iav")
export default class IavController {
  @operation({
    summary: "Get Iav",
  })
  @get()
  static getIav = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iav",
  })
  @post("{id}")
  static createIav = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
