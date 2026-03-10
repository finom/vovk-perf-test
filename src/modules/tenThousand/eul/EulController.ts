import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eul")
export default class EulController {
  @operation({
    summary: "Get Eul",
  })
  @get()
  static getEul = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eul",
  })
  @post("{id}")
  static createEul = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
