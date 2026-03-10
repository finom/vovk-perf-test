import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eoz")
export default class EozController {
  @operation({
    summary: "Get Eoz",
  })
  @get()
  static getEoz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eoz",
  })
  @post("{id}")
  static createEoz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
