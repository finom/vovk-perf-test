import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iaw")
export default class IawController {
  @operation({
    summary: "Get Iaw",
  })
  @get()
  static getIaw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iaw",
  })
  @post("{id}")
  static createIaw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
