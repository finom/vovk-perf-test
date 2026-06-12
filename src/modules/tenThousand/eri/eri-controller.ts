import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eri")
export default class EriController {
  @operation({
    summary: "Get Eri",
  })
  @get()
  static getEri = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eri",
  })
  @post("{id}")
  static createEri = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
