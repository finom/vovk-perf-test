import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iuu")
export default class IuuController {
  @operation({
    summary: "Get Iuu",
  })
  @get()
  static getIuu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iuu",
  })
  @post("{id}")
  static createIuu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
