import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iur")
export default class IurController {
  @operation({
    summary: "Get Iur",
  })
  @get()
  static getIur = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iur",
  })
  @post("{id}")
  static createIur = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
