import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhj")
export default class HhjController {
  @operation({
    summary: "Get Hhj",
  })
  @get()
  static getHhj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hhj",
  })
  @post("{id}")
  static createHhj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
