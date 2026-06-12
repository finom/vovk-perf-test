import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("itz")
export default class ItzController {
  @operation({
    summary: "Get Itz",
  })
  @get()
  static getItz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Itz",
  })
  @post("{id}")
  static createItz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
