import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ieu")
export default class IeuController {
  @operation({
    summary: "Get Ieu",
  })
  @get()
  static getIeu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ieu",
  })
  @post("{id}")
  static createIeu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
