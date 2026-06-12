import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ium")
export default class IumController {
  @operation({
    summary: "Get Ium",
  })
  @get()
  static getIum = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ium",
  })
  @post("{id}")
  static createIum = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
