import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izx")
export default class IzxController {
  @operation({
    summary: "Get Izx",
  })
  @get()
  static getIzx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Izx",
  })
  @post("{id}")
  static createIzx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
