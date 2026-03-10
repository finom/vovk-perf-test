import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izv")
export default class IzvController {
  @operation({
    summary: "Get Izv",
  })
  @get()
  static getIzv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Izv",
  })
  @post("{id}")
  static createIzv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
