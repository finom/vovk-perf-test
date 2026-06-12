import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipl")
export default class IplController {
  @operation({
    summary: "Get Ipl",
  })
  @get()
  static getIpl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ipl",
  })
  @post("{id}")
  static createIpl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
