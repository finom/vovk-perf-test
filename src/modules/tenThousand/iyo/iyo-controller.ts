import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iyo")
export default class IyoController {
  @operation({
    summary: "Get Iyo",
  })
  @get()
  static getIyo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iyo",
  })
  @post("{id}")
  static createIyo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
